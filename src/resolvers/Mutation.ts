export async function createItem(_, { data }, ctx) {
  const newItem = await new ctx.models.Item({
    ...data.data,
  });

  return newItem.save();
}

export async function updateItem(_, { data }, ctx) {
  if (!data) {
    throw Error("You must provided some info to update.");
  }

  const item = await ctx.models.Item.findByIdAndUpdate(
    data.id,
    { ...data },
    { new: true, runValidators: true }
  );

  return item;
}
