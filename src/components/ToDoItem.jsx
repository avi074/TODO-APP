import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PRIORITY, STATUS, PCOLOR, SCOLOR } from "../utils/constants.js";

function ToDoItem({ name, desc, priority, status }) {
  return (
    <li className="mx-auto my-4 w-full lg:m-0 lg:px-4">
      <Card variant="gradient" color="gray" className="">
        <CardBody>
          <Typography variant="h5" color="white" className="">
            {name}
          </Typography>
          <Typography variant="paragraph" color="amber">
            {desc}
          </Typography>
        </CardBody>
        <CardFooter>
          <div className="flex justify-around flex-wrap mb-4">
            <Typography variant="h6" color={PCOLOR[priority]}>
              Priority : {PRIORITY[priority]}
            </Typography>
            <Typography variant="h6" color={SCOLOR[status]}>
              Status : <Button color={SCOLOR[status]} className="p-2">{STATUS[status]}</Button>
            </Typography>
          </div>
          <div className="flex justify-around flex-wrap gap-2">
            <Button variant="outlined" color="blue">
              Edit
            </Button>
            <Button variant="gradient" color="red">
              Delete
            </Button>
            <Button
              variant="text"
              color="green"
              className="p-2 shadow-sm shadow-white">
              Mark as Done
            </Button>
          </div>
        </CardFooter>
      </Card>
    </li>
  );
}

export default ToDoItem;
