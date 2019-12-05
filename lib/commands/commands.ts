import Package from "../src/Package.interface";

const program = require('commander');
import Command from "../src/Command.interface";

export default class Commands {
    public commands: Array<Command>;
    private package: Package;

    constructor(packageJs: Package) {
        this.package = packageJs;
        program.version(this.package.version)
               .description(this.package.description);
    }

    init(commands: Array<Command>) {
        this.commands = commands;
        return this;
    }

    start(argv) {
        this.commands.forEach((command: Command) => {
            if(command.command === undefined && command.description === undefined
                && command.alias === undefined && command.options === undefined
                && command.option === undefined && command.action === undefined
                && command.event !== undefined && command.event.name === '--help') {
                program.on(command.event.name, command.event.action);
            } else {
                let _command = program.command(command.command);
                if(command.alias !== undefined)
                    _command.alias(command.alias);
                if(command.description !== undefined)
                    _command.description(command.description);
                if(command.option !== undefined)
                    _command.option(command.option.flag, command.option.description);
                else if (command.options !== undefined)
                    for(let option of command.options)
                        _command.option(option.flag, option.description);
                if(command.action !== undefined)
                    _command.action(command.action);
                if(command.event !== undefined)
                    _command.on(command.event.name, command.event.action);
            }
        });

        program.parse(argv);
    }
}