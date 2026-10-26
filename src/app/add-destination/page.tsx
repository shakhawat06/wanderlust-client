"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Save, Trash2 } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/** Matches the light field fill in the design. */
const fieldClass = "bg-muted/50";

const categories = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Cultural",
  "Wildlife",
];

const initialValues = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

type FormValues = typeof initialValues;
type FormErrors = Partial<Record<keyof FormValues, string>>;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Destination name is required.";
  if (!values.country.trim()) errors.country = "Country is required.";
  if (!values.category) errors.category = "Please select a category.";

  if (!values.price.trim()) {
    errors.price = "Price is required.";
  } else if (Number.isNaN(Number(values.price)) || Number(values.price) < 0) {
    errors.price = "Enter a valid price.";
  }

  if (!values.duration.trim()) errors.duration = "Duration is required.";
  if (!values.departureDate)
    errors.departureDate = "Departure date is required.";

  if (!values.imageUrl.trim()) {
    errors.imageUrl = "Image URL is required.";
  } else if (!/^https?:\/\/\S+$/i.test(values.imageUrl.trim())) {
    errors.imageUrl = "Enter a valid URL, e.g. https://example.com/image.jpg";
  }

  if (!values.description.trim()) {
    errors.description = "Description is required.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Description must be at least 20 characters.";
  }

  return errors;
}

export default function AddDestinationPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setSubmitted(false);
    };

  const handleCategoryChange = (value: string | null) => {
    setValues((prev) => ({ ...prev, category: value ?? "" }));
    setErrors((prev) => ({ ...prev, category: undefined }));
    setSubmitted(false);
  };

  const handleCancel = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // No backend yet — reset the form once the payload is valid.
    setValues(initialValues);
    setSubmitted(true);
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 md:py-16">
      <h1 className="text-4xl font-light tracking-tight md:text-5xl">
        Add New Travel Package
      </h1>

      {submitted && (
        <Alert className="mt-6 border-brand/40 bg-brand/10 text-brand [&>svg]:text-brand">
          <CheckCircle2 />
          <AlertTitle>Travel package added</AlertTitle>
          <AlertDescription className="text-brand/90">
            Your destination has been submitted successfully.
          </AlertDescription>
        </Alert>
      )}

      <Card className="mx-auto mt-10 w-full max-w-2xl">
        <form
          id="add-destination-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <CardContent className="pt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field>
                  <FieldLabel htmlFor="destination-name">
                    Destination Name
                  </FieldLabel>
                  <Input
                    id="destination-name"
                    placeholder="Bali Paradise"
                    className={fieldClass}
                    value={values.name}
                    onChange={handleChange("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <FieldError>{errors.name}</FieldError>}
                </Field>
              </div>

              <div>
                <Field>
                  <FieldLabel htmlFor="country">Country</FieldLabel>
                  <Input
                    id="country"
                    placeholder="Indonesia"
                    className={fieldClass}
                    value={values.country}
                    onChange={handleChange("country")}
                    aria-invalid={!!errors.country}
                  />
                  {errors.country && <FieldError>{errors.country}</FieldError>}
                </Field>
              </div>

              <div>
                <Field>
                  <FieldLabel htmlFor="category">Category</FieldLabel>
                  <Select
                    value={values.category}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger
                      id="category"
                      className={`w-full ${fieldClass}`}
                      aria-invalid={!!errors.category}
                    >
                      <SelectValue placeholder="Beach" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <FieldError>{errors.category}</FieldError>
                  )}
                </Field>
              </div>

              <div>
                <Field>
                  <FieldLabel htmlFor="price">Price (USD)</FieldLabel>
                  <Input
                    id="price"
                    type="number"
                    className={fieldClass}
                    min="0"
                    step="1"
                    placeholder="e.g., 1299"
                    value={values.price}
                    onChange={handleChange("price")}
                    aria-invalid={!!errors.price}
                  />
                  {errors.price && <FieldError>{errors.price}</FieldError>}
                </Field>
              </div>

              <div>
                <Field>
                  <FieldLabel htmlFor="duration">Duration</FieldLabel>
                  <Input
                    id="duration"
                    placeholder="e.g., 7 Days/6 Nights"
                    className={fieldClass}
                    value={values.duration}
                    onChange={handleChange("duration")}
                    aria-invalid={!!errors.duration}
                  />
                  {errors.duration && (
                    <FieldError>{errors.duration}</FieldError>
                  )}
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field>
                  <FieldLabel htmlFor="departure-date">
                    Departure Date
                  </FieldLabel>
                  <Input
                    id="departure-date"
                    type="date"
                    className={fieldClass}
                    value={values.departureDate}
                    onChange={handleChange("departureDate")}
                    aria-invalid={!!errors.departureDate}
                  />
                  {errors.departureDate && (
                    <FieldError>{errors.departureDate}</FieldError>
                  )}
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field>
                  <FieldLabel htmlFor="image-url">Image URL</FieldLabel>
                  <Input
                    id="image-url"
                    type="url"
                    className={fieldClass}
                    placeholder="https://example.com/image.jpg"
                    value={values.imageUrl}
                    onChange={handleChange("imageUrl")}
                    aria-invalid={!!errors.imageUrl}
                  />
                  {errors.imageUrl && (
                    <FieldError>{errors.imageUrl}</FieldError>
                  )}
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field>
                  <FieldLabel htmlFor="description">Description</FieldLabel>
                  <Textarea
                    id="description"
                    placeholder="Describe the travel experience..."
                    className={`min-h-28 ${fieldClass}`}
                    value={values.description}
                    onChange={handleChange("description")}
                    aria-invalid={!!errors.description}
                  />
                  {errors.description && (
                    <FieldError>{errors.description}</FieldError>
                  )}
                </Field>
              </div>
            </div>
          </CardContent>
        </form>

        <CardFooter className="justify-end gap-3 border-transparent bg-transparent">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="border-destructive/40 text-destructive hover:border-destructive/60 hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 />
            Cancel
          </Button>
          <Button
            type="submit"
            form="add-destination-form"
            className="gap-2 bg-brand text-white hover:bg-brand/85"
          >
            <Save />
            Add Travel Package
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
