import { Hono } from "hono";

export const home = new Hono().get("/", (c) => c.html("hm"));
