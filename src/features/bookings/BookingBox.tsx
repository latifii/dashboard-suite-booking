import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import Heading from "../../components/ui/Heading";
import { BookingBox as BookingBoxType } from "../../types/booking.interface";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

type BookingBoxProps = {
  booking: BookingBoxType;
};
const BookingBox: React.FC<BookingBoxProps> = ({ booking }) => {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: {
      fullName: guestName,
      email,
      countryFlag,
      nationalID,
      nationality,
    },
    cabin: { name: cabinName },
  } = booking;

  const colorPrice = isPaid ? "text-success-content" : "text-warning-content";
  return (
    <section className="overflow-hidden rounded-lg border bg-white shadow dark:bg-base-75">
      <Heading className="flex flex-col gap-4 bg-primary px-6 py-3 text-lg text-white lg:flex-row lg:items-center lg:justify-between">
        <p className="flex gap-4">
          <HiOutlineHomeModern />
          <span>
            {numNights} شب در سوییت {cabinName}
          </span>
        </p>
        <p className="text-xs lg:text-sm">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Heading>
      <div className="my-5 px-6">
        <p className="flex flex-col py-4 lg:flex-row lg:gap-5">
          {countryFlag && (
            <span>
              <img src={countryFlag} alt={nationality} width={20} />
            </span>
          )}
          <span className="font-bold">
            {guestName}
            {/* {numGuests > 1 ? `+ ${numGuests - 1} مهمان ها` : ""} */}
          </span>
          <span className="hidden lg:block">•</span>
          <span className="font-light text-opacity-50">{email}</span>
          <span className="hidden lg:block">•</span>
          <span className="font-light text-opacity-50">
            کد ملی: {nationalID}
          </span>
        </p>
        {observations && (
          <p className="my-4 flex flex-col lg:flex-row lg:gap-5">
            <HiOutlineChatBubbleBottomCenterText className="hidden text-xl text-primary lg:block" />
            <span className="font-bold text-opacity-50">
              <b>نظرات</b>
            </span>
            <span>{observations}</span>
          </p>
        )}
        <p className="my-4 flex flex-col lg:flex-row lg:gap-5">
          <HiOutlineChatBubbleBottomCenterText className="hidden text-xl text-primary lg:block" />
          <span className="font-bold text-opacity-50">
            <b>شامل صبحانه؟</b>
          </span>
          <span>{hasBreakfast ? "بله" : "خیر"}</span>
        </p>

        <div
          className={`my-4 flex flex-col justify-between gap-2 rounded-md bg-opacity-30 p-4 lg:flex-row lg:p-6 ${isPaid ? "bg-success" : "bg-warning"}`}
        >
          <p
            className={`flex flex-col gap-4 lg:flex-row lg:items-center ${colorPrice}`}
          >
            <HiOutlineCurrencyDollar className="hidden text-2xl lg:block" />
            <span>قیمت کل</span>
            <span>{formatCurrency(totalPrice)}</span>
            <span className="font-light">
              {hasBreakfast &&
                ` (${formatCurrency(cabinPrice)} سوییت + ${formatCurrency(
                  extrasPrice,
                )} صبحانه)`}
            </span>
          </p>

          <p className={`text-sm font-bold ${colorPrice}`}>
            {isPaid ? "پرداخت شده" : "حضوری پرداخت میکند"}
          </p>
        </div>

        <p className="my-4 text-sm font-thin">
          رزرو شده {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </p>
      </div>
    </section>
  );
};

export default BookingBox;
