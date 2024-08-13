import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import addIcon from "../assets/add.svg";
import { PRIORITY, PCOLOR } from "../utils/constants.js";

function InputModal() {
  const initialFormData = {
    name: "",
    desc: "",
    priority: "0",
    status: 0,
  };
  // State Vars
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const handleOpen = () => setOpen(!open);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateTodos = () => {
    console.log(formData);
    resetDialog();
  };

  const resetDialog = () => {
    setFormData(initialFormData);
    handleOpen();
  };

  return (
    <div id="input-modal" className="w-full px-4 py-2">
      <header className="flex justify-between items-center mb-2">
        <Typography variant="h4" color="white">
          My Tasks
        </Typography>
        <Button
          color="white"
          variant="gradient"
          onClick={handleOpen}
          className="p-1"
          title="Add TODO">
          <img src={addIcon} alt="Add To-Do" className="w-8" />
        </Button>
      </header>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Task Details</DialogHeader>

        <DialogBody className="flex flex-col gap-4">
          <Input
            type="text"
            label="Task Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <Textarea
            label="Task Description"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />

          <Select
            label="Task Priority"
            value={formData.priority}
            color={PCOLOR[formData.priority]}          
            onChange={(e) => {
              setFormData({
                ...formData,
                priority: e,
              });
            }}>
            {PRIORITY.map((pri, index) => (
              <Option key={index} value={`${index}`}>
                <span className={`font-bold text-${PCOLOR[formData.priority]}-900`}>{pri}</span>
              </Option>
            ))}
          </Select>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={resetDialog}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={updateTodos}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default InputModal;
