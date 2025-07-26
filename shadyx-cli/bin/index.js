#!/usr/bin/env node
import installComponent from "../lib/install.js";

const [, , command, url] = process.argv;

if (command === "add" && url) {
  try {
    await installComponent(url);
  } catch (err) {
    console.error("❌ Failed to install component :", err.message);
  }
} else {
  console.log("Usage:\n  shadyx add <component-json-url>");
}
