import { render, screen, fireEvent } from "@testing-library/react";
import ProfilePage from "../ProfilePage"; // Adjust path if needed
import { BrowserRouter } from "react-router-dom"; // Wrap with BrowserRouter for routing

// Mocking localStorage to test logout functionality
beforeAll(() => {
  global.localStorage = {
    removeItem: jest.fn(),
  };
});

describe("ProfilePage", () => {
  test("renders profile page with default profile name and image", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );

    // Check if the profile title is rendered
    expect(screen.getByText("My Profile")).toBeInTheDocument();
    
    // Check if the profile name is displayed
    expect(screen.getByText("Sudip Chaudhary")).toBeInTheDocument();
    
    // Check if the default profile image is displayed
    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toHaveAttribute("src", expect.stringContaining("profile.jpeg"));
  });

  test("toggles edit mode for name", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );

    // Check if the edit button is rendered
    const editButton = screen.getByText("Edit Name");
    expect(editButton).toBeInTheDocument();

    // Click the edit button to enable editing
    fireEvent.click(editButton);

    // After clicking the edit button, the input field should appear
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    // Change the name in the input
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "New Name" } });

    // Check if the new name appears in the input field
    expect(screen.getByRole("textbox")).toHaveValue("New Name");

    // Click the save button to toggle back to view mode
    fireEvent.click(screen.getByText("Save"));

    // After clicking save, the name should be displayed in an <h2> tag
    expect(screen.getByText("New Name")).toBeInTheDocument();
  });

  test("uploads a new profile image", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );

    // Check if the default profile image is displayed
    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toHaveAttribute("src", expect.stringContaining("profile.jpeg"));

    // Trigger file upload
    const file = new Blob(["dummy content"], { type: "image/jpeg" });
    const fileInput = screen.getByLabelText("Upload Photo");
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Check if the uploaded image is now set as the profile image
    // (In this case, we'll check if it has an updated src)
    expect(profileImage).toHaveAttribute("src", expect.stringContaining("data:image/jpeg;base64"));
  });

  test("handles logout functionality", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );

    // Simulate logout button click
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    // Check if the localStorage.removeItem was called
    expect(localStorage.removeItem).toHaveBeenCalledWith("userToken");

    // Check if the user is redirected (check window.location)
    expect(window.location.href).toBe("/");
  });
});
