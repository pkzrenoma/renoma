// cSpell:disable

import type { StructureResolver } from 'sanity/structure';
import {
  singletonDocumentListItem,
  filteredDocumentListItems,
} from 'sanity-plugin-singleton-tools';
import {
  Home,
  Info,
  Briefcase,
  FolderOpen,
  Beaker,
  GraduationCap,
  Users,
  Mail,
  Settings,
} from 'lucide-react';

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Zawartość')
    .items([
      // Singleton entry for "Dom" (Home)
      singletonDocumentListItem({
        S,
        context,
        type: 'dom',
        title: 'Dom',
        icon: Home,
        id: 'singletonDom',
      }),

      // Singleton entry for "O Nas" (About Us)
      singletonDocumentListItem({
        S,
        context,
        type: 'oNas',
        title: 'O Nas',
        icon: Info,
        id: 'singletonONas',
      }),

      // Singleton entry for "Usługi" (Services)
      singletonDocumentListItem({
        S,
        context,
        type: 'uslugi',
        title: 'Usługi',
        icon: Briefcase,
        id: 'singletonUslugi',
      }),

      // Regular document list for "Realizacje" (Projects)
      S.documentTypeListItem('realizacje').title('Realizacje').icon(FolderOpen),

      // Singleton entry for "Renoma LAB" (Lab)
      singletonDocumentListItem({
        S,
        context,
        type: 'renomaLab',
        title: 'Renoma LAB',
        icon: Beaker,
        id: 'singletonRenomaLab',
      }),

      // Singleton entry for "Ucz Się z Nami" (Learn With Us)
      singletonDocumentListItem({
        S,
        context,
        type: 'uczSieZNami',
        title: 'Ucz Się z Nami',
        icon: GraduationCap,
        id: 'singletonUczSieZNami',
      }),

      // Singleton entry for "Pracuj z Nami" (Work With Us)
      singletonDocumentListItem({
        S,
        context,
        type: 'pracujZNami',
        title: 'Pracuj z Nami',
        icon: Users,
        id: 'singletonPracujZNami',
      }),

      // Singleton entry for "Kontakt" (Contact)
      singletonDocumentListItem({
        S,
        context,
        type: 'kontakt',
        title: 'Kontakt',
        icon: Mail,
        id: 'singletonKontakt',
      }),

      // Divider
      S.divider(),

      // Singleton entry for "Ustawienia" (Settings)
      singletonDocumentListItem({
        S,
        context,
        type: 'ustawienia',
        title: 'Ustawienia',
        icon: Settings,
        id: 'singletonUstawienia',
      }),

      // Filtered list of non-singleton items (excluding singletons and "realizacje")
      ...filteredDocumentListItems({ S, context }).filter(
        (item) => item.getId() !== 'realizacje'
      ),
    ]);