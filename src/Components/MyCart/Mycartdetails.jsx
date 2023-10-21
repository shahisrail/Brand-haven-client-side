import Swal from "sweetalert2";
import "./mycar.css";
const Mycartdetails = ({ cart, cartdata, setData }) => {
  const { _id, name, brandName, rating, photo, price, description } = cart;
  const hnadelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(
          `https://assaignment-server-10-mttgxp327-shahisrail134-gmailcom.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const remainig = cartdata?.filter((datas) => datas._id !== _id);
            setData(remainig)
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className=" md:h-[700px] lg:h-[450px] p-5 w-full flex flex-col lg:flex-row justify-around container mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} className="rounded-xl w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">name: {name}</h2>
          <h2 className="card-title">brandName: {brandName}</h2>
          <h2 className="card-title">rating:{rating}</h2>
          <h2 className="card-title">price:{price}</h2>
          <p>{description}</p>

          <button onClick={() => hnadelDelete(_id)} className="btn-grad">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mycartdetails;
