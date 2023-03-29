
export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })

    // const aa = async () => {
    //     const res = await fetch(
    //       `https://wiishy-backend.ir/api/giftsoffollowings/${req.userId}`
    //     );
    //     const responsData = await res.json();
    //     return responsData;
    //   };

    //   aa();
  }