import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PRIORITY, STATUS, PCOLOR, SCOLOR } from "../utils/constants.js";

function ToDoItem({
  task: { id, name, desc, priority, status },
  events: { handleEdit, handleDelete, handleStatus },
}) {
  return (
    <li className="mx-auto my-4 w-full lg:m-0 lg:px-4" id={`todo-${id}`}>
      <Card variant="gradient" color="gray">
        <CardBody>
          <Typography variant="h5" color="white">
            {name}
          </Typography>
          <div className="text-amber-700 text-sm">
            <pre>
              {desc}
            </pre>
          </div>
        </CardBody>
        
        <CardFooter className="pt-0">
          <div className="flex justify-around flex-wrap mb-4">
            <Typography variant="h6" color={PCOLOR[priority]}>
              Priority : {PRIORITY[priority]}
            </Typography>
            <Typography variant="h6" color={SCOLOR[status]}>
              Status :{" "}
              <Button
                color={SCOLOR[status]}
                className="p-2"
                disabled={status == 0}
                onClick={() => {
                  handleStatus(id, status == 1 ? 2 : 1);
                }}>
                {STATUS[status]}
              </Button>
            </Typography>
          </div>

          {/* Button Group */}
          <div className="flex justify-around flex-wrap gap-2">
            <Button
              variant="outlined"
              color="blue"
              onClick={() => {
                handleEdit(id);
              }}
              disabled={status == 0}>
              Edit
            </Button>

            <Button
              variant="gradient"
              color="red"
              onClick={() => {
                handleDelete(id);
              }}>
              Delete
            </Button>

            <Button
              variant="text"
              color="green"
              className="p-2 shadow-sm shadow-white"
              onClick={() => {
                handleStatus(id, status > 0 ? 0 : 1);
              }}>
              Mark as {status > 0 ? "Done" : "Undone"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </li>
  );
}

export default ToDoItem;
