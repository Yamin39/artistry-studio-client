import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import loadingAnimation from "../../animations/loading.json";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

const UpdateCraft = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const { warningToast } = useToast();
  const [myCraft, setMyCraft] = useState({});
  const [loader, setLoader] = useState(true);

  const { imageURL, name, subcategory_name, short_description, price, rating, customization, processing_time, stockStatus } = myCraft;

  const getCrafts = () => {
    setLoader(true);
    fetch(`https://artistry-studio-server.vercel.app/craft-items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCraft(data);
        setLoader(false);
      });
  };

  useEffect(() => {
    getCrafts();
  }, []);

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;

    const imageURL = form.imageURL.value;
    const name = form.name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;

    const craftData = {
      imageURL,
      name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
    };

    if (subcategory_name === "Choose") {
      warningToast("Please choose a subcategory name");
      return;
    }

    if (customization === "") {
      warningToast("Please select a customization option");
      return;
    }

    if (stockStatus === "") {
      warningToast("Please select a Stock Status");
      return;
    }

    console.log(craftData);

    // update data in the database

    fetch(`https://artistry-studio-server.vercel.app/craft-items/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          getCrafts();
        }
      });
  };

  return (
    <div className="max-w-[1440px] w-10/12 mx-auto">
      <div className="my-8 text-center">
        <h2 className="font-bold leading-10 font-serif text-3xl">
          Hey, <span className="text-[#A38556]">{user.displayName}!</span> <br /> Update your craft item
        </h2>
      </div>

      {loader ? (
        <div className="flex flex-col justify-center items-center">
          <Lottie className="size-36" animationData={loadingAnimation} />
        </div>
      ) : (
        <form onSubmit={handleUpdateCraft} className="bg-[#e2e0dc4b] shadow-xl p-6 rounded-lg max-w-3xl mx-auto mb-8">
          <div>
            {/* item name */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <label htmlFor="name" className="text-lg font-medium text-gray-600">
                Item Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                placeholder="Enter item's name"
                className="input w-full input-bordered bg-[#ffffff83]"
                required
              />
            </div>

            {/* imageURL */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <label htmlFor="imageURL" className="text-lg font-medium text-gray-600">
                ImageURL
              </label>
              <input
                type="text"
                id="imageURL"
                name="imageURL"
                defaultValue={imageURL}
                placeholder="Enter item's Image URL"
                className="input w-full input-bordered bg-[#ffffff83]"
                required
              />
            </div>
          </div>

          {/* short_description */}
          <div className="flex flex-col mt-4 space-y-2">
            <label htmlFor="short_description" className="text-lg font-medium text-gray-600">
              Short description
            </label>
            <textarea
              id="short_description"
              name="short_description"
              defaultValue={short_description}
              placeholder="Add a short description for this item..."
              rows="4"
              className="textarea w-full textarea-bordered bg-[#ffffff83]"
              required
            ></textarea>
          </div>

          <div>
            {/* subcategory_name */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <label htmlFor="subcategory_name" className="text-lg font-medium text-gray-600">
                Subcategory name
              </label>
              <select id="subcategory_name" name="subcategory_name" defaultValue={subcategory_name} className="select w-full select-bordered bg-[#ffffff83]">
                <option disabled>Choose</option>
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolor Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </div>

            {/* processing_time */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <label htmlFor="processing_time" className="text-lg font-medium text-gray-600">
                Processing time
              </label>
              <input
                type="text"
                id="processing_time"
                name="processing_time"
                defaultValue={processing_time}
                placeholder="Item's processing time"
                className="input w-full input-bordered bg-[#ffffff83]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-6">
            {/* price */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <label htmlFor="price" className="text-lg font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                id="price"
                step="any"
                name="price"
                defaultValue={price}
                placeholder="Enter item's price"
                className="input w-full input-bordered bg-[#ffffff83]"
                required
              />
            </div>

            {/* rating */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <label htmlFor="rating" className="text-lg font-medium text-gray-600">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                step="any"
                name="rating"
                defaultValue={rating}
                placeholder="Enter item's rating"
                className="input w-full input-bordered bg-[#ffffff83]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-6">
            {/* customization */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <p className="text-lg font-medium text-gray-600">Customization</p>
              <div className="flex sm:flex-col md:flex-row gap-2 items-center sm:items-start md:items-center justify-between">
                <div className="flex-1 flex gap-2 items-center">
                  <input type="radio" id="customization-yes" value="Yes" name="customization" className="radio" defaultChecked={customization === "Yes"} />
                  <label htmlFor="customization-yes" className="text-gray-600">
                    Yes
                  </label>
                </div>
                <div className="flex-1 sm:flex-auto lg:flex-1 flex gap-2 items-center">
                  <input type="radio" id="customization-no" value="No" name="customization" className="radio" defaultChecked={customization === "No"} />
                  <label htmlFor="customization-no" className="text-gray-600">
                    No
                  </label>
                </div>
              </div>
            </div>

            {/* stockStatus */}
            <div className="flex flex-col flex-1 mt-4 space-y-2">
              <p className="text-lg font-medium text-gray-600">Stock status</p>
              <div className="flex sm:flex-col md:flex-row gap-2 items-center sm:items-start md:items-center justify-between">
                <div className="flex-1 flex gap-2 items-center">
                  <input
                    type="radio"
                    id="stockStatus-inStock"
                    value="In stock"
                    name="stockStatus"
                    className="radio"
                    defaultChecked={stockStatus === "In stock"}
                  />
                  <label htmlFor="stockStatus-inStock" className="text-gray-600">
                    In stock
                  </label>
                </div>
                <div className="flex-1 sm:flex-auto lg:flex-1 md:max-w-[60%] flex gap-2 items-center">
                  <input
                    type="radio"
                    id="stockStatus-madeToOrder"
                    value="Made to Order"
                    name="stockStatus"
                    className="radio"
                    defaultChecked={stockStatus === "Made to Order"}
                  />
                  <label htmlFor="stockStatus-madeToOrder" className="text-gray-600">
                    Made to Order
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-neutral w-full text-lg mt-5">Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateCraft;
