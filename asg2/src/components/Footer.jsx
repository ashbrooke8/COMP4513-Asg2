const Footer = () => {
  return (
    <div className="bg-white text-gray-700 p-4 rounded-md shadow-lg mt-6">
      <p className="text-md italic font-bold text-center">
        Photo by{" "}
        <a
          href="https://unsplash.com/@heather_wilde?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="text-blue-600"
        >
          Heather Wilde
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/a-large-body-of-water-surrounded-by-trees-Ph0ReOHMBpY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="text-blue-600"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default Footer;
