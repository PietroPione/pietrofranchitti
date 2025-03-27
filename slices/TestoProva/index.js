/**
 * @typedef {import("@prismicio/client").Content.TestoProvaSlice} TestoProvaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestoProvaSlice>} TestoProvaProps
 * @type {import("react").FC<TestoProvaProps>}
 */
const TestoProva = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testo_prova (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestoProva;
