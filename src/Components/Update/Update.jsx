import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const   Update = () => {
  const update = useLoaderData()
  const {_id, name, brandName, rating, photo, price, description, type } = update;
  console.log(update);

const handelUpdate = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const brandName = form.brandName.value;
  const type = form.type.value;
  const description = form.description.value;
  const price = form.price.value;
  const rating = form.rating.value;
  const photo = form.photo.value;
  const updateCart = { name, brandName, type, description, price, rating, photo };
  console.log(updateCart);
  fetch(`http://localhost:5000/cart/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateCart),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
     Swal.fire({
       icon: "success",
       title: "update suucsess",
       text: "Something went wrong!",
       footer: '<a href="">Why do I have this issue?</a>',
     });
    });
};


  return (
    <div className="container mx-auto mt-5 ">
      <div className="bg-[#194656] p-4 md:p-24 min-h-screen">
        <h2 className="text-3xl text-yellow-300 mt-[-50px] font-extrabold">
          update a Product
        </h2>
        <form onSubmit={handelUpdate}>
          <div className="md:flex mb-4  ">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-yellow-300">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-yellow-300">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brandName"
                  defaultValue={brandName}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-yellow-300">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Product Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-yellow-300">
                  Short Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  defaultValue={description}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-yellow-300">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-yellow-300">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-yellow-300">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Product" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default Update;