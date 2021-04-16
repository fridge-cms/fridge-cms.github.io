import Head from "next/head";

export default ({ tag = "h1", id = null, title = false, children }) => {
  const text = typeof children === "string" ? children : children.join("");
  if (id === null) {
    id = text.toLowerCase().replace(/\s/g, "-").replace(/[?!]/g, "");
  }

  const Tag = tag;

  return (
    <Tag id={id}>
      {title && (
        <Head>
          <title>{text} - Fridge Documentation</title>
        </Head>
      )}
      {children}
    </Tag>
  );
};
