import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../i18n/content.model';
import { Icon } from '../shared/icon';
import { SectionHeading } from './section-heading';

@Component({
  selector: 'app-case-studies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionHeading],
  template: `
    @let cs = content().cases;
    <section id="etudes-de-cas" class="dot-panel py-20 sm:py-28" aria-labelledby="cases-title">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <app-section-heading headingId="cases-title" [eyebrow]="cs.eyebrow" [title]="cs.title" [intro]="cs.intro" />

        <div class="mt-12 space-y-8">
          @for (item of cs.items; track item.title; let i = $index) {
            <article class="rounded-3xl bg-surface p-6 shadow-card sm:p-10">
              <header class="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span class="text-sm font-bold uppercase tracking-[0.12em] text-text-muted">{{ item.context }}</span>
                <span class="text-sm text-text-muted">· {{ item.period }}</span>
                @if (item.ongoing) {
                  <span class="inline-flex items-center gap-2 rounded-full bg-accent-light/60 px-3 py-1 text-xs font-bold text-accent-dark">
                    <span class="size-2 rounded-full bg-accent ring-4 ring-accent-light"></span>
                    {{ cs.labels.ongoing }}
                  </span>
                }
              </header>
              <h3 class="mt-3 text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">{{ item.title }}</h3>

              <div class="mt-8 grid gap-8 lg:grid-cols-3">
                <div>
                  <h4 class="text-sm font-bold uppercase tracking-[0.12em] text-secondary-dark">{{ cs.labels.problem }}</h4>
                  <p class="mt-2 leading-relaxed text-text">{{ item.problem }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-bold uppercase tracking-[0.12em] text-secondary-dark">{{ cs.labels.solution }}</h4>
                  <p class="mt-2 leading-relaxed text-text">{{ item.solution }}</p>
                </div>
                <div class="rounded-2xl bg-background-alt p-5">
                  <h4 class="text-sm font-bold uppercase tracking-[0.12em] text-secondary-dark">{{ cs.labels.impact }}</h4>
                  <ul class="mt-3 space-y-2.5">
                    @for (impact of item.impact; track impact) {
                      <li class="flex gap-2.5 font-semibold text-primary">
                        <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                          <app-icon name="check" [size]="13" [strokeWidth]="3" />
                        </span>
                        {{ impact }}
                      </li>
                    }
                  </ul>
                </div>
              </div>

              <!-- Schéma d'architecture simplifié -->
              <div class="mt-8 border-t border-border pt-6">
                <p class="text-xs font-bold uppercase tracking-[0.12em] text-text-muted">{{ cs.labels.architecture }}</p>
                <ol class="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                  @for (node of item.flow; track node; let n = $index; let last = $last) {
                    <li
                      class="rounded-xl border px-4 py-2.5 text-center text-sm font-semibold"
                      [class]="n === 1 ? 'border-accent bg-accent text-primary' : 'border-border bg-surface text-primary'"
                    >
                      {{ node }}
                    </li>
                    @if (!last) {
                      <li aria-hidden="true" class="flex justify-center text-secondary">
                        <app-icon name="arrow-right" [size]="18" class="rotate-90 sm:rotate-0" />
                      </li>
                    }
                  }
                </ol>
                <p class="mt-5 text-sm text-text-muted">
                  <span class="font-semibold">{{ cs.labels.stack }}</span>
                  {{ item.stack.join(' · ') }}
                </p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class CaseStudies {
  readonly content = input.required<SiteContent>();
}
