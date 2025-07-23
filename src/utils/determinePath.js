const determinePath = () => {
  const cwd = process.cwd();
  const OS = process.platform;
  return OS == "win32"
    ? `${cwd}\\storage\\images\\`
    : `${cwd}//storage//images//`;
};

export default determinePath;
