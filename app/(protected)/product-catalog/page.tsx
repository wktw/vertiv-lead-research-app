import { PRODUCT_CATALOG_SEED } from "@/lib/product-catalog-seed";

export default function ProductCatalogPage() {
  return (
    <section className="card">
      <h2>Product Catalog</h2>
      <p>Seeded Vertiv 3-phase portfolio products and lifecycle offerings.</p>
      {PRODUCT_CATALOG_SEED.slice(0, 8).map((item) => (
        <article className="card" key={item.product_name}>
          <strong>{item.product_name}</strong>
          <p>{item.product_family}</p>
          <p>{item.short_description}</p>
        </article>
      ))}
      <p>+ {PRODUCT_CATALOG_SEED.length - 8} additional seeded products in database migration.</p>
    </section>
  );
}
