import { Item } from "../types";

export function removeItem(currentTreeArray: Item[] = [], key: string): void {
	if (currentTreeArray.length) {
		for (let i = 0; i < currentTreeArray.length; i++) {
			const currentItem = currentTreeArray[i];
			if (currentItem.key === key) {
				currentTreeArray.splice(i, 1);
			} else {
				if (currentItem?.children?.length === 0) {
					continue;
				} else {
					removeItem(currentItem.children ?? [], key);
				}
			}
		}
	}
}
