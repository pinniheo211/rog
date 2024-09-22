export const GiphyEmbed = () => {
  return (
    <div className="relative w-full h-0 pb-full">
      {" "}
      {/* Tailwind classes */}
      <iframe
        src="https://giphy.com/embed/ZbIYGUpqyL5cTOpfUe"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allowFullScreen
        title="Asus Giphy"
      ></iframe>
    </div>
  );
};
