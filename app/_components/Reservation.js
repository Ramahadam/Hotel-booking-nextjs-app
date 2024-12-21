import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
	const [settings, bookedDates] = await Promise.all([
		getSettings(),
		getBookedDatesByCabinId(cabin.id),
	]);

	const session = await auth();
	return (
		<div className="grid grid-cols-2 min-h-[400px] ">
			<DateSelector
				cabin={cabin}
				settings={settings}
				bookedDates={bookedDates}
			/>

			{session?.user?.name ? (
				<ReservationForm cabin={cabin} user={session.user} />
			) : (
				<LoginMessage />
			)}
		</div>
	);
}

export default Reservation;
