type SectionLabelProps = {
  readonly children: string;
  readonly id?: string;
};

/** `... /About me ...` — the reference's section marker. */
export const SectionLabel = ({ children, id }: SectionLabelProps) => (
  <p id={id} className="mono-label">
    <span aria-hidden="true">... /</span>
    {children}
    <span aria-hidden="true"> ...</span>
  </p>
);
