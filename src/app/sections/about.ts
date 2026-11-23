import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../i18n/content.model';
import { SectionHeading } from './section-heading';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, SectionHeading],
  styleUrl: './about.scss',
  template: `
    @let a = content().about;
    <section id="a-propos" class="about-bg py-20 sm:py-28" aria-labelledby="about-title">
      <div class="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[320px_1fr]">
        <div class="mx-auto w-full max-w-xs">
          <img
            ngSrc="images/camille-hayot.webp"
            width="640"
            height="640"
            [alt]="a.photoAlt"
            class="aspect-square w-full rounded-[2rem] border-8 border-surface object-cover shadow-card"
          />
        </div>

        <div>
          <app-section-heading headingId="about-title" [eyebrow]="a.eyebrow" [title]="a.title" />
          @for (p of a.paragraphs; track $index) {
            <p class="mt-5 max-w-2xl text-lg leading-relaxed text-text">{{ p }}</p>
          }

          <div class="mt-10 max-w-2xl">
            <div class="rounded-3xl bg-surface p-6 shadow-card">
              <h3 class="font-extrabold text-primary">{{ a.stackTitle }}</h3>
              @for (group of [a.stackMain, a.stackExtra]; track group.label; let first = $first) {
                <p class="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-text-muted">{{ group.label }}</p>
                <ul class="mt-2 flex flex-wrap gap-2">
                  @for (tech of group.items; track tech) {
                    <li
                      class="rounded-full px-3 py-1 text-sm font-semibold"
                      [class]="first ? 'bg-background-alt text-secondary-dark' : 'border border-border text-text-muted'"
                    >
                      {{ tech }}
                    </li>
                  }
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  readonly content = input.required<SiteContent>();
}
