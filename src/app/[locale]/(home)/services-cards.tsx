"use client";
import clsx from "clsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedLink from "@/components/animated-link";
import { useLocale } from "next-intl";
import { SectionUslugiHomeProps } from "./uslugi"; // Adjust the import path if necessary
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function FadeInSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, controls } = useIntersectionObserver({
    animateOnView: true,
    threshold: 0.3,
    once: true, // Animate only once
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ServicesCards({
  servicesGroup,
}: {
  servicesGroup: SectionUslugiHomeProps["servicesGroup"];
}) {
  const locale = useLocale();

  const serviceGroups = [
    servicesGroup.serviceGroupOne,
    servicesGroup.serviceGroupTwo,
    servicesGroup.serviceGroupThree,
  ];

  return (
    <FadeInSection className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
      {serviceGroups.map((group, index) => (
        <Card key={index} className="border-zinc-700 bg-zinc-800 text-zinc-100">
          <CardHeader>
            <CardTitle className="font-regular text-[1.7rem] leading-tight tracking-[-0.015em]">
              {group.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text flex flex-col space-y-4 text-[1.1rem] text-zinc-200">
            <Accordion type="multiple" className="w-full">
              {group.services.map((item, itemIndex) => (
                <AccordionItem
                  className={clsx("border-zinc-700", {
                    "border-none": itemIndex === group.services.length - 1,
                  })}
                  key={itemIndex}
                  value={`item-${itemIndex}`}
                >
                  <AccordionTrigger className="text-left text-[1.2rem]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-balance text-[1.1rem]">
                    <p className="mb-6">{item.shortDescription}</p>
                    <AnimatedLink
                      underline={false}
                      showArrow={false}
                      href={`/uslugi#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      variant="dark"
                      className="mb-2 text-base text-zinc-300 underline decoration-1 underline-offset-8 hover:text-zinc-50 hover:underline"
                    >
                      {locale === "pl"
                        ? "Więcej"
                        : locale === "en"
                          ? "More"
                          : "Mehr"}
                    </AnimatedLink>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </FadeInSection>
  );
}

export default ServicesCards;
