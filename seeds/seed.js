/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import dayjs from "dayjs";

export async function seed(knex) {
  await knex("tasks").del();

  let data = [];

  let now = dayjs().subtract(3, "days");

  for (let i = 1; i < 25; i++) {
    data.push({
      title: `Task ${i}`,
      description: i % 2 == 0 && `Do Task ${i}. To do this task you must ...`,
      status: "pending",
      due_date: now.add(i, "days").toDate(),
    });
  }

  await knex("tasks").insert(data);
}
