import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../i18n/content.model';
import { CLIENTS } from '../site.config';

/** Bandeau « Ils m'ont fait confiance » : logos (ou noms, en attendant les logos). */
@Component({
  selector: 'app-trust',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (clients.length) {
      <section class="border-y border-border bg-surface py-10" aria-labelledby="trust-title">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="trust-title" class="text-center text-sm font-bold uppercase tracking-[0.14em] text-text-muted">
            {{ content().trust.title }}
          </h2>
          <ul class="mt-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            @for (client of clients; track client.name) {
              <li>
                @if (client.logo) {
                  <img
                    [src]="client.logo"
                    [alt]="client.name"
                    loading="lazy"
                    class="h-9 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                } @else {
                  <span class="text-xl font-extrabold tracking-tight text-text-muted">{{ client.name }}</span>
                }
              </li>
            }
          </ul>
        </div>
      </section>
    }
  `,
})
export class Trust {
  readonly content = input.required<SiteContent>();
  protected readonly clients = CLIENTS;
}
