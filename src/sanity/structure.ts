// cSpell:disable
import type { StructureResolver } from "sanity/structure";
import {
  singletonDocumentListItem,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-tools";
import {
  Home,
  Info,
  Briefcase,
  FolderOpen,
  // FileText,
  Beaker,
  GraduationCap,
  Users,
  Mail,
  Cookie,
  MousePointerClick,
  ThumbsUp,
  MessageCircleQuestion,
} from "lucide-react";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("WWW PKZ Renoma")
    .items([
      S.listItem()
        .title("Dom")
        .icon(Home)
        .child(
          S.list()
            .title("Sekcje strony „Dom”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "heroSection",
                title: "Sekcja 1: Powitanie",
                id: "singletonHeroSection",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "aboutSection",
                title: "Sekcja 2: O nas",
                id: "singletonAboutSection",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "servicesSection",
                title: "Sekcja 3: Usługi",
                id: "singletonServicesSection",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "cooperationSection",
                title: "Sekcja 4: Współpraca",
                id: "singletonLogoSection",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "homePageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonhomePageMeta",
              }),
            ]),
        ),
      S.listItem()
        .title("O nas")
        .icon(Info)
        .child(
          S.list()
            .title("Sekcje strony „O nas”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "aboutHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonAboutHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "aboutUs",
                title: "Sekcja 2: O nas",
                id: "singletonAboutUs",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "ourHistory",
                title: "Sekcja 3: Nasza historia",
                id: "singletonOurHistory",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "aboutPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonaboutPageMeta",
              }),
            ]),
        ),
      S.listItem()
        .title("Usługi")
        .icon(Briefcase)
        .child(
          S.list()
            .title("Sekcje strony „Usługi”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "servicesHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonServicesHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "servicesGroup",
                title: "Sekcja 2: Usługi",
                id: "singletonServicesGroup",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "servicesPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonservicesPageMeta",
              }),
            ]),
        ),
      S.listItem()
        .title("Realizacje")
        .icon(FolderOpen)
        .child(
          S.list()
            .title("Sekcje strony „Realizacje”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "projectsHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonProjectsPageHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "projectsPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonProjectsPageMeta",
              }),
            ]),
        ),
      // S.documentTypeListItem("caseStudyEntry")
      //   .title("Wpis realizacji")
      //   .icon(FileText),
      S.listItem()
        .title("Renoma LAB")
        .icon(Beaker)
        .child(
          S.list()
            .title("Sekcje strony „RenomaLAB”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "renomaLabHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonRenomaLabHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "labOffer",
                title: "Sekcja 2: Oferta",
                id: "singletonLabOffer",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "renomaLabPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonrenomaLabPageMeta",
              }),
            ]),
        ),
      S.listItem()
        .title("Ucz się z nami")
        .icon(GraduationCap)
        .child(
          S.list()
            .title("Sekcje strony „Ucz się z nami”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "learnWithUsHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonLearnWithUsHeader",
              }),

              singletonDocumentListItem({
                S,
                context,
                type: "whatWeOffer",
                title: "Sekcja 2: Co oferujemy?",
                id: "singletonWhatWeOffer",
              }),

              singletonDocumentListItem({
                S,
                context,
                type: "whoWeAreLookingFor",
                title: "Sekcja 3: Kogo szukamy?",
                id: "singletonWhoWeAreLookingFor",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "learnWithUsPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonlearnWithUsPageMeta",
              }),
            ]),
        ),
      S.listItem()
        .title("Pracuj z nami")
        .icon(Users)
        .child(
          S.list()
            .title("Sekcje strony „Pracuj z nami”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "workWithUsHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonWorkWithUsHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "jobOffers",
                title: "Sekcja 2: Oferty pracy",
                id: "singletonJobOffer",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "workWithUsPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonworkWithUsPageMeta",
              }),
            ]),
        ),
      S.listItem()
        .title("FAQ")
        .icon(MessageCircleQuestion)
        .child(
          S.list()
            .title("Sekcje strony „FAQ”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "faqHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonFaqHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "faqList",
                title: "Sekcja 2: FAQ",
                id: "singletonfaqList",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "faqPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonfaqPageMeta",
              }),
            ]),
        ),
      S.listItem()
        .title("Kontakt")
        .icon(Mail)
        .child(
          S.list()
            .title("Sekcje strony „Kontakt”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "contactHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonContaktHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "contactForm",
                title: "Sekcja 2: Formularz kontaktowy",
                id: "singletonContactForm",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "contactDetails",
                title: "Sekcja 3: Dane kontaktowe",
                id: "singletonContactDetails",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "contactPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletoncontactPageMeta",
              }),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("CTA")
        .icon(MousePointerClick)
        .child(
          S.list()
            .title("CTA")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "ctaContent",
                title: "CTA",
                id: "singletonCtaContent",
              }),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Media społecznościowe")
        .icon(ThumbsUp)
        .child(
          S.list()
            .title("Media społecznościowe")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "socialMediaLinks",
                title: "Linki społecznościowe",
                id: "singletonSocialMediaLinks",
              }),
            ]),
        ),
      S.listItem()
        .title("Polityka prywatności")
        .icon(Cookie)
        .child(
          S.list()
            .title("Sekcje strony „Polityka prywatności”")
            .items([
              singletonDocumentListItem({
                S,
                context,
                type: "privacyHeader",
                title: "Sekcja 1: Nagłówek",
                id: "singletonPrivacyHeader",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "privacyContent",
                title: "Sekcja 2: Treść",
                id: "singletonPrivacyContent",
              }),
              singletonDocumentListItem({
                S,
                context,
                type: "privacyPageMeta",
                title: "SEO & Podgląd społecznościowy",
                id: "singletonprivacyPageMeta",
              }),
            ]),
        ),
      S.divider(),
      ...filteredDocumentListItems({ S, context }).filter(
        (item) => item.getId() !== "caseStudyEntry",
      ),
    ]);
