import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../i18n/content.model';
import { Icon } from '../shared/icon';
import { SectionHeading } from './section-heading';

@Component({
  selector: 'app-method',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionHeading],
  template: `
    @let m = content().method;
    <section id="methode" class="py-20 sm:py-28" aria-labelledby="method-title">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <app-section-heading headingId="method-title" [eyebrow]="m.eyebrow" [title]="m.title" [intro]="m.intro" />

        <ol class="relative mt-12 grid gap-6 lg:grid-cols-3">
          <!-- Ligne pointillée reliant les étapes -->
          <li aria-hidden="true" class="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-secondary/30 lg:block"></li>
          @for (step of m.steps; track step.title; let i = $index) {
            <li class="relative flex flex-col items-center rounded-3xl border border-border bg-surface p-7 text-center shadow-card">
              <span
                class="flex items-center justify-center rounded-full"
                [class]="i === 1 ? 'size-16 bg-accent text-primary ring-8 ring-accent-light' : 'size-14 border-2 border-border bg-surface text-secondary'"
              >
                <app-icon [name]="step.icon" [size]="i === 1 ? 28 : 24" />
              </span>
              <span class="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-text-muted">
                {{ i + 1 }} · {{ step.duration }}
              </span>
              <h3 class="mt-2 text-xl font-extrabold text-primary">{{ step.title }}</h3>
              <p class="mt-3 leading-relaxed text-text-muted">{{ step.text }}</p>
            </li>
          }
        </ol>

        <div class="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div class="dot-panel rounded-3xl p-7 sm:p-9">
            <h3 class="text-xl font-extrabold text-primary">{{ m.firstVersion.title }}</h3>
            <ul class="mt-5 space-y-3">
              @for (item of m.firstVersion.items; track item) {
                <li class="flex gap-3 rounded-2xl bg-surface px-4 py-3 font-semibold text-primary shadow-soft">
                  <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <app-icon name="check" [size]="13" [strokeWidth]="3" />
                  </span>
                  {{ item }}
                </li>
              }
            </ul>
          </div>

          <ul class="grid gap-4">
            @for (item of m.commitments; track item.title) {
              <li class="flex items-start gap-4 rounded-3xl border border-border bg-surface p-6">
                <span class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-background-alt text-secondary">
                  <app-icon [name]="item.icon" [size]="22" />
                </span>
                <span>
                  <span class="block font-extrabold text-primary">{{ item.title }}</span>
                  <span class="mt-1 block text-text-muted">{{ item.text }}</span>
                </span>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class Method {
  readonly content = input.required<SiteContent>();
}
