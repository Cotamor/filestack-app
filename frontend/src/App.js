import { useState } from 'react'
import GetDataComponent from './components/GetDataComponent'
import { PickerOverlay } from 'filestack-react'

const App = () => {
  const [isPicker, setIsPicker] = useState(false)
  const [image, setImage] = useState('')

  return (
    <div className="bg-blue-50 px-4 flex-colo">
      <form className="bg-blue-100 shadow-md rounded w-2/5 py-12 px-4">
        {image ? (
          <img
            src={image && image.filesUploaded[0].url}
            alt="imageUploaded"
            className="w-full h-56 object-cover"
          />
        ) : (
          <button
            type="button"
            className="w-full text-lg font-bold h-56 border-4 border-dashed border-blue-800 text-blue-800"
            onClick={() => (isPicker ? setIsPicker(false) : setIsPicker(true))}
          >
            Choose Image
          </button>
        )}

        {/* input title */}
        <input
          type="text"
          placeholder="Image Title"
          className="w-full my-8 bg-white py-4 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />
        {/* sumbit button */}
        <button
          type="submit"
          className="w-full bg-blue-800 text-white font-bold   rounded py-4"
        >
          Submit
        </button>
        {/* Filestack */}
        <div className="mt-4 relative">
          {isPicker && (
            <PickerOverlay
              apikey={process.env.REACT_APP_FILESTACK_API_KEY}
              onSuccess={(res) => {
                setImage(res)
                setIsPicker(false)
              }}
              onError={(res) => alert(res)}
              pickerOptions={{
                maxFiles: 1,
                accept:'image/*',
                errorsTimeout: 2000,
                maxSize: 1 * 1000 *  1000,
              }}
            />
          )}
        </div>
      </form>
      <GetDataComponent />
    </div>
  )
}
export default App
