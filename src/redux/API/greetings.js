const fetchMessagesAsync = async () => {
  const res = await fetch('http://127.0.0.1:3500/api/greetings').then(
    (data) => data.json(),
  );
  return res;
};

export default fetchMessagesAsync;
