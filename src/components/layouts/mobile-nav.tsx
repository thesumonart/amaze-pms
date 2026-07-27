"use client";

import { Menu, Phone } from "lucide-react";
import type { MouseEvent } from "react";
import { useState } from "react";
import { Logo } from "@/components/layouts/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNavLinks } from "@/data/nav-links";
import { serviceCategories, services } from "@/data/services";
import { site } from "@/data/site";
import { useAnchorScroll } from "@/hooks/use-anchor-scroll";
import { requestServiceDialog } from "@/lib/service-bus";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  onDark: boolean;
}

export function MobileNav({ onDark }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const anchorScroll = useAnchorScroll();

  const navigate = (event: MouseEvent<HTMLElement>, href: string) => {
    setOpen(false);
    anchorScroll(event, href);
  };

  const openService = (slug: string) => {
    setOpen(false);
    requestServiceDialog(slug);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          aria-label="Open menu"
          className={cn(
            "lg:hidden",
            onDark && "text-white hover:bg-white/10 hover:text-white",
          )}
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] gap-0 overflow-y-auto">
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="services" className="border-none">
              <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                Services
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-5">
                  {serviceCategories.map((category) => (
                    <div key={category.id}>
                      <p className="font-mono text-eyebrow uppercase text-neutral-500">
                        {category.label}
                      </p>
                      <ul className="mt-2">
                        {services
                          .filter((service) => service.category === category.id)
                          .map((service) => (
                            <li key={service.slug}>
                              <button
                                type="button"
                                onClick={() => openService(service.slug)}
                                className="flex min-h-11 w-full items-center gap-3 rounded-md px-1 py-2 text-left text-sm font-medium text-neutral-700 no-underline hover:text-ink-950"
                              >
                                <service.icon className="size-4 text-brand-500" />
                                {service.name}
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {primaryNavLinks
            .filter((link) => link.label !== "Services")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => navigate(event, link.href)}
                className="flex min-h-11 items-center border-t border-border py-3 text-base font-medium text-ink-950"
              >
                {link.label}
              </a>
            ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-border px-5 py-5">
          <Button asChild variant="premium" size="xl" className="w-full">
            <a href="#contact" onClick={(event) => navigate(event, "#contact")}>
              Book a Free Inspection
            </a>
          </Button>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-neutral-700"
          >
            <Phone className="size-4 text-brand-500" />
            {site.phone}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
