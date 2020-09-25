import { Item } from "../types";
import { addItem } from "./addItem";
import { findItem } from "./findItem";
import { removeItem } from "./removeItem";

export function relocateItem(
	currentTreeArray: Item[],
	key: string,
	targetKey: string
): void {
	if (currentTreeArray.length) {
		const foundItem = findItem(currentTreeArray, key);

		removeItem(currentTreeArray, key);
		if (foundItem) {
			addItem(currentTreeArray, foundItem, targetKey);
		}
	}
}
