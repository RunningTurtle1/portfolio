import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContent } from '../i18n/content.model';
import { Lang } from '../site.config';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    <header class="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 font-sans backdrop-blur">
      <!-- Liseré bleu / vert de la bannière -->
      <div class="flex h-1" aria-hidden="true">
        <span class="w-2/3 bg-secondary"></span>
        <span class="w-1/3 bg-accent"></span>
      </div>
      <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" [attr.aria-label]="'Navigation'">
        <a [routerLink]="home()" class="text-lg font-extrabold tracking-tight text-primary" (click)="open.set(false)">
          Camille Hayot<span class="text-accent">.</span>
        </a>

        <ul class="hidden items-center gap-8 md:flex">
          @for (item of content().nav.items; track item.id) {
            <li>
              <a [routerLink]="home()" [fragment]="item.id" class="text-sm font-semibold text-text-muted transition-colors hover:text-primary">
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-2 sm:gap-3">
          <a
            [routerLink]="otherLangPath()"
            [attr.hreflang]="otherLang()"
            [attr.lang]="otherLang()"
            [attr.aria-label]="content().nav.switchLang"
            [attr.title]="content().nav.switchLang"
            class="rounded-full border border-border px-3 py-1.5 text-xs font-bold uppercase text-primary transition-colors hover:border-secondary hover:text-secondary"
          >
            {{ otherLang() }}
          </a>
          <a
            [routerLink]="home()"
            fragment="contact"
            class="hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-surface transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            {{ content().nav.cta }}
          </a>
          <button
            type="button"
            class="inline-flex size-10 items-center justify-center rounded-full text-primary md:hidden"
            [attr.aria-expanded]="open()"
            aria-controls="menu-mobile"
            [attr.aria-label]="open() ? content().nav.closeMenu : content().nav.openMenu"
            (click)="open.set(!open())"
          >
            <app-icon [name]="open() ? 'x' : 'menu'" [size]="22" />
          </button>
        </div>
      </nav>

      @if (open()) {
        <div id="menu-mobile" class="border-t border-border bg-surface px-4 pb-6 pt-2 md:hidden">
          <ul class="flex flex-col">
            @for (item of content().nav.items; track item.id) {
              <li>
                <a
                  [routerLink]="home()"
                  [fragment]="item.id"
                  class="block py-3 text-base font-semibold text-primary"
                  (click)="open.set(false)"
                >
                  {{ item.label }}
                </a>
              </li>
            }
          </ul>
          <a
            [routerLink]="home()"
            fragment="contact"
            class="mt-3 flex justify-center rounded-full bg-primary px-4 py-3 text-sm font-bold text-surface"
            (click)="open.set(false)"
          >
            {{ content().nav.cta }}
          </a>
        </div>
      }
    </header>
  `,
})
export class SiteHeader {
  readonly content = input.required<SiteContent>();
  readonly lang = input.required<Lang>();

  protected readonly open = signal(false);
  protected readonly home = computed(() => ['/', this.lang()]);
  protected readonly otherLang = computed<Lang>(() => (this.lang() === 'fr' ? 'en' : 'fr'));
  protected readonly otherLangPath = computed(() => ['/', this.otherLang()]);
}
