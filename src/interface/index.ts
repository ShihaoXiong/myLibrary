export interface Subjects {
	name: string;
	color: string;
	key: string;
}

export interface Topics {
	id: string;
	subject: string;
	type: string;
	chapter: number;
	chapterName: string;
	topic: string;
	guide: string;
}

export interface TopicsList<T = Topics[]> {
	nonuExplain: T;
	discuss: T;
}
