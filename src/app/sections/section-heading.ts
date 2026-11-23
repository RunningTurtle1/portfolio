import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** En-tête commun des sections : surtitre en majuscules, titre très gras, introduction. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block max-w-2xl' },
  template: `
    <p class="text-sm font-bold uppercase tracking-[0.14em] text-secondary-dark">{{ eyebrow() }}</p>
    <h2 [id]="headingId()" class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
      {{ title() }}
    </h2>
    @if (intro()) {
      <p class="mt-4 text-lg leading-relaxed text-text-muted">{{ intro() }}</p>
    }
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input<string>();
  readonly headingId = input<string>();
}
