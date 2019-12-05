import CommandEvent from "./CommandEvent.interface";
import CommandOption from "./CommandOption.interface";

export default interface Command {
    command?: string,
    description?: string,
    alias?: string,
    option?: CommandOption,
    options?: Array<CommandOption>,
    action?: (cmd, options) => void,
    event?: CommandEvent
}