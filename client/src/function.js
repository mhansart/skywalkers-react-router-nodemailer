const scrollTop = () => {
  document.body.scrollIntoView({
    block: 'start',
    inline: 'nearest',
  });
};
export default scrollTop;
