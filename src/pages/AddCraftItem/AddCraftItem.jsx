import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

const AddCraftItem = () => {
  const { warningToast } = useToast();
  const { user } = useAuth();

  const handleAddCraftItem = (e) => {
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
    const user_email = user.email;
    const user_name = user.displayName;

    const itemData = {
      imageURL,
      name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      user_email,
      user_name,
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

    // send data to the server
    fetch("http://localhost:5000/craft-items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto">
      <div className="my-8 text-center">
        <h2 className="font-bold font-serif text-3xl">Add an art & craft item</h2>
      </div>

      <form onSubmit={handleAddCraftItem} className="bg-[#e2e0dc4b] shadow-xl p-6 rounded-lg max-w-3xl mx-auto mb-8">
        <div>
          <h3 className="font-semibold text-xl">All information</h3>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-6">
          {/* name */}
          <div className="flex flex-col flex-1 mt-4 space-y-2">
            <label htmlFor="name" className="text-lg font-medium text-gray-600">
              Name
            </label>
            <input type="text" id="name" name="name" placeholder="Enter item's name" className="input w-full input-bordered bg-[#ffffff83]" required />
          </div>

          {/* imageURL */}
          <div className="flex flex-col flex-1 mt-4 space-y-2">
            <label htmlFor="imageURL" className="text-lg font-medium text-gray-600">
              Image
            </label>
            <input
              type="text"
              id="imageURL"
              name="imageURL"
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
            placeholder="Add a short description for this item..."
            rows="4"
            className="textarea w-full textarea-bordered bg-[#ffffff83]"
            required
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-6">
          {/* subcategory_name */}
          <div className="flex flex-col flex-1 mt-4 space-y-2">
            <label htmlFor="subcategory_name" className="text-lg font-medium text-gray-600">
              Subcategory name
            </label>
            <select id="subcategory_name" name="subcategory_name" className="select w-full select-bordered bg-[#ffffff83]">
              <option disabled selected>
                Choose
              </option>
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
                <input type="radio" id="customization-yes" value="Yes" name="customization" className="radio" />
                <label htmlFor="customization-yes" className="text-gray-600">
                  Yes
                </label>
              </div>
              <div className="flex-1 sm:flex-auto lg:flex-1 flex gap-2 items-center">
                <input type="radio" id="customization-no" value="No" name="customization" className="radio" />
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
                <input type="radio" id="stockStatus-inStock" value="In stock" name="stockStatus" className="radio" />
                <label htmlFor="stockStatus-inStock" className="text-gray-600">
                  In stock
                </label>
              </div>
              <div className="flex-1 sm:flex-auto lg:flex-1 md:max-w-[60%] flex gap-2 items-center">
                <input type="radio" id="stockStatus-madeToOrder" value="Made to Order" name="stockStatus" className="radio" />
                <label htmlFor="stockStatus-madeToOrder" className="text-gray-600">
                  Made to Order
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-6">
          {/* user_email */}
          <div className="flex flex-col flex-1 mt-4 space-y-2">
            <label htmlFor="user_email" className="text-lg font-medium text-gray-600">
              User email
            </label>
            <input
              type="text"
              id="user_email"
              defaultValue={user.email || "Email not found"}
              className="input w-full input-bordered bg-[#ffffff83] cursor-not-allowed"
              readOnly
            />
          </div>

          {/* user_name */}
          <div className="flex flex-col flex-1 mt-4 space-y-2">
            <label htmlFor="user_name" className="text-lg font-medium text-gray-600">
              User name
            </label>
            <input
              type="text"
              id="user_name"
              defaultValue={user.displayName || "Name not found"}
              className="input w-full input-bordered bg-[#ffffff83] cursor-not-allowed"
              readOnly
            />
          </div>
        </div>

        <button className="btn btn-neutral w-full text-lg mt-5">Add</button>
      </form>
    </div>
  );
};

export default AddCraftItem;
