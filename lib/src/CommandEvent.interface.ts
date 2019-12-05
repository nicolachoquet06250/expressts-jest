export default interface CommandEvent {
    name: string,
    action: () => void
}