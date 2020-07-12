import { Result } from "interfaces/Result.interface"
export interface Corrector {
	(value: Result): Result
}
interface CorrectorConfig {
	(email: string): Corrector
}
export const corrector: CorrectorConfig = email => value => {
	if (!!!email || !!!value?.suggest) return value
	value.corrected = email.replace(/@.*$/, `@${value.suggest}`)
	return value
}