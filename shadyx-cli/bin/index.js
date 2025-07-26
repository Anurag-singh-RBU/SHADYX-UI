#!/usr/bin/env node
import installComponent from "../lib/install.js";

const [, , command, url] = process.argv;

if (command === "add" && url) {
  installComponent(url);
} else {
  console.log("Usage:\n  shadyx add <component-json-url>");
}
