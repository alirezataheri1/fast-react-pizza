import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// revalidation: React router knows data has changed as a result of action and when ever it happend it will automaticlly refetch the data to the background and then rerender the page with that data
export async function action({ request, params }) {
  await updateOrder(params.orderID, { priority: true });

  return null;
}
