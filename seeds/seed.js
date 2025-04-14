/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import dayjs from "dayjs";

export async function seed(knex) {
  await knex("tasks").del();

  data = [];

  for (let i = 1; i < 10; i++) {
    data.push({
      title: "Task ${i}",
      description: i % 2 == 0 && "Do Task ${i}",
      status: "pending",
      due_date: dayjs().add(Math.floor(Math.random() * 10) + 1, "days"),
    });
  }

  await knex("tasks").insert(data);
}
