const { id } = evt?.data;
const eventType = evt?.type;

if (eventType === 'user.created' || eventType === 'user.updated') {
  const { first_name, last_name, image_url, email_addresses } = evt?.data;
  try {
    const user = await createOrUpdateUser(
      id,
      first_name,
      last_name,
      image_url,
      email_addresses
    );
    if (user && eventType === 'user.created') {
      try {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userMogoId: user._id,
          },
        });
      } catch (error) {
        console.log('Error: Could not update user metadata:', error);
      }
    }
  } catch (error) {
    console.log('Error: Could not create or update user:', error);
    return new Response('Error: Could not create or update user', {
      status: 400,
    });
  }
}

if (eventType === 'user.deleted') {
  try {
    await deleteUser(id);
  } catch (error) {
    console.log('Error: Could not delete user:', error);
    return new Response('Error: Could not delete user', {
      status: 400,
    });
  }

  return new Response('Webhook received', { status: 200 });
}
