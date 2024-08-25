export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  
  // Access the private apiSecret key (server-side only)
  const secret = config.apiSecret;

  console.log({secret})
  return [
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 192,
        dislikes: 25,
      },
      views: 305,
      userId: 121,
    },
    {
      id: 2,
      title: "His mother had always taught him 2",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind 2.",
      tags: ["history2", "american2", "crime2"],
      reactions: {
        likes: 100,
        dislikes: 30,
      },
      views: 300,
      userId: 120,
    },
  ];
});
