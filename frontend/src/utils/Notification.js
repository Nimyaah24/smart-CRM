export const addNotification = (
  title,
  message,
  type = "success"
) => {

  const oldNotifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || [];

  const newNotification = {
    id: Date.now(),
    title,
    message,
    time: "Just now",
    type,
    unread: true,
  };

  localStorage.setItem(
    "notifications",
    JSON.stringify([
      newNotification,
      ...oldNotifications,
    ])
  );
};