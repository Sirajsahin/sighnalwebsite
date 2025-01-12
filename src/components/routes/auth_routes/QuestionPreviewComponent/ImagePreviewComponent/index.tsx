import {
  IuserResponse,
  setUserResponse,
} from "@/app_redux/reducers/slice/auth/survey_slice";
import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";

const ImagePreviewComponent = ({ data, flage, type, questionId }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<number[]>([]);
  const [imageSelection, setImageSelection] = useState<string[]>(null);

  const handleSelect = (id: number, item: string) => {
    // console.log(item, "ddffd");
    if (type) {
      // Multiple selection mode
      if (selected.includes(id)) {
        setSelected(selected.filter((item) => item !== id));
        setImageSelection(imageSelection.filter((item) => item !== item));
      } else {
        setSelected([...selected, id]);
        setImageSelection([...imageSelection, item]);
      }
    } else {
      // Single selection mode
      setSelected([id]);
      setImageSelection([item]);
    }
    const constructedBody: IuserResponse = {
      question_id: questionId,
      response: imageSelection?.join("||"),
    };

    dispatch(setUserResponse({ data: [constructedBody] }));
  };

  useEffect(() => {
    setSelected([]);
  }, [type]);

  return (
    <div
      className={`${flage ? "grid-cols-4 grid" : "flex flex-col gap-4 h-64 overflow-auto scrollbar-hide"} gap-4 my-2 items-center`}
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
      }}
    >
      {data?.map((item, id) => (
        <div
          key={id}
          className={`relative w-full  h-36 rounded-md cursor-pointer items-center ${
            selected.includes(id) ? " border-black border-2" : ""
          }`}
          onClick={() => handleSelect(id, item?.link)}
        >
          <img
            src={item?.link}
            alt={item?.file_name}
            className="w-auto h-full rounded-md object-cover"
          />
          {selected.includes(id) && (
            <div className="absolute flex justify-center items-center inset-0 ">
              <MdDone className="w-8 h-8 text-black bg-white rounded-full p-1" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImagePreviewComponent;
