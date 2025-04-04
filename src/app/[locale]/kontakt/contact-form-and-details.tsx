"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Mail, MapPin, Phone, FileText, Mailbox } from "lucide-react";
import ContactForm from "@/app/[locale]/kontakt/contact-form";
import AnimatedLink from "@/components/animated-link";
import { FadeInSection } from "@/components/fade-in-section";

type ContactDetailsSectionProps = {
  contactDetails: {
    numerTelefonu: string;
    adresEmail: string;
    adresBiuraLineOne: string;
    adresBiuraLineTwo: string;
    nazwaFirmyOne: string;
    nazwaFirmyTwo: string;
    adresFakturLineOne: string;
    adresFakturLineTwo: string;
    numerNipOne: string;
    numerRegonOne: string;
    numerNipTwo: string;
    numerRegonTwo: string;
    adresKorespondencyjnyLineOne: string;
    adresKorespondencyjnyLineTwo: string;
  };
  contactForm: {
    contactFormSubjects: string[];
  };
  paddingY?: string;
};

const paragraphClass =
  "text-zinc-900 text-base xl:text-[1.1rem] leading-relaxed";
const headingClass =
  "mb-3 md:mb-4 font-bolder text-[1.3rem] md:text-[1.3rem] xl:text-[1.4rem] leading-tight tracking-[-0.015em] text-zinc-800";
const iconClass = "min-h-5 min-w-5 xl:min-h-6 xl:min-w-6";

export default function ContactFormAndDetails({
  contactDetails,
  contactForm,
  paddingY = "py-16 md:py-44",
}: ContactDetailsSectionProps) {
  const t = useTranslations("kontakt-page");

  return (
    <section className={clsx("bg-zinc-200", paddingY)}>
      <MaxWidthWrapper>
        <div className="grid justify-center gap-x-24 gap-y-14 lg:grid-cols-2">
          {/* Contact Information in 2x2 Grid */}
          <FadeInSection className="order-2 grid h-fit max-w-[32rem] gap-x-10 gap-y-12 pt-8 md:grid-cols-2 lg:order-1">
            {/* Phone Section */}
            <FadeInSection>
              <div className="flex max-w-60 items-start gap-4">
                <Phone className={iconClass} aria-hidden="true" />
                <div>
                  <h3 className={headingClass}>{t("phone")}</h3>
                  <p className={paragraphClass}>
                    {contactDetails.numerTelefonu}
                  </p>
                </div>
              </div>
            </FadeInSection>
            {/* Email Section */}
            <FadeInSection>
              <div className="flex max-w-60 items-start gap-4">
                <Mail className={iconClass} aria-hidden="true" />
                <div>
                  <h3 className={headingClass}>{t("email")}</h3>
                  <p className={paragraphClass}>
                    <a
                      href={`mailto:${contactDetails.adresEmail}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {contactDetails.adresEmail}
                    </a>
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Address Section */}
            <FadeInSection>
              <div className="flex max-w-60 flex-col space-y-12">
                {/* Office Address Block */}
                <div className="flex items-start gap-4">
                  <MapPin className={iconClass} aria-hidden="true" />
                  <div>
                    <h3 className={headingClass}>{t("office")}</h3>
                    <p className={paragraphClass}>
                      {contactDetails.adresBiuraLineOne}
                    </p>
                    <p className={paragraphClass}>
                      {contactDetails.adresBiuraLineTwo}
                    </p>
                    <AnimatedLink
                      href="https://maps.app.goo.gl/jeWnz8HYg3yHwUdE7"
                      external={true}
                      className="mt-4 text-base"
                    >
                      Zobacz na mapie
                    </AnimatedLink>
                  </div>
                </div>

                {/* Correspondence Address Block */}
                <div className="flex items-start gap-4">
                  <Mailbox className={iconClass} aria-hidden="true" />
                  <div>
                    <h3 className={headingClass}>
                      {t("correspondenceAddress")}
                    </h3>
                    <p className={paragraphClass}>
                      {contactDetails.adresKorespondencyjnyLineOne}
                    </p>
                    <p className={paragraphClass}>
                      {contactDetails.adresKorespondencyjnyLineTwo}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Invoice Information Section */}
            <FadeInSection>
              <div className="flex max-w-60 items-start gap-4">
                <FileText className={iconClass} aria-hidden="true" />
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className={headingClass}>{t("invoice-info")}</h3>
                    <p className={paragraphClass}>
                      <span className="text-[1.025rem] leading-tight">
                        {contactDetails.nazwaFirmyOne}
                      </span>
                    </p>
                    <p className={paragraphClass}>
                      {contactDetails.adresFakturLineOne}
                    </p>
                    <p className={paragraphClass}>
                      {contactDetails.adresFakturLineTwo}
                    </p>
                    <p className={paragraphClass}>
                      <span>NIP:</span> {contactDetails.numerNipOne}
                    </p>
                    <p className={paragraphClass}>
                      <span>REGON:</span> {contactDetails.numerRegonOne}
                    </p>
                  </div>
                  <div className="mt-1">
                    <p className={paragraphClass}>
                      <span className="text-[1.025rem] leading-tight">
                        {contactDetails.nazwaFirmyTwo}
                      </span>
                    </p>
                    <p className={paragraphClass}>
                      {contactDetails.adresFakturLineOne}
                    </p>
                    <p className={paragraphClass}>
                      {contactDetails.adresFakturLineTwo}
                    </p>
                    <p className={paragraphClass}>
                      <span>NIP:</span> {contactDetails.numerNipTwo}
                    </p>
                    <p className={paragraphClass}>
                      <span>REGON:</span> {contactDetails.numerRegonTwo}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </FadeInSection>

          {/* Contact Form */}
          <FadeInSection className="order-1 mt-8 max-w-xl lg:order-2">
            <ContactForm
              color={"light"}
              contactFormSubjects={contactForm.contactFormSubjects.map(
                (subject) => ({ label: subject }),
              )}
            />
          </FadeInSection>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
