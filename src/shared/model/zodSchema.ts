import { z } from "zod";

export default z.object({
  locale: z.literal("").optional(),
  title: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  description: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  logo: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  logoWidth: z.string().optional(),
  logoHeight: z.string().optional(),
  logoFit: z.enum(["none", "contain", "cover", "fill"]).optional(),
  logoPosition: z.enum(["none", "left", "right", "top", "bottom"]).optional(),
  focusFirstQuestionAutomatic: z.boolean().optional(),
  focusOnFirstError: z.boolean().optional(),
  completedHtml: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  completedBeforeHtml: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  completedHtmlOnCondition: z
    .array(
      z.record(z.any()).and(
        z.intersection(
          z.any(),
          z.object({
            html: z
              .any()
              .superRefine((x, ctx) => {
                const schemas = [z.string(), z.any()];
                const errors = schemas.reduce(
                  (errors: z.ZodError[], schema) =>
                    ((result) =>
                      "error" in result ? [...errors, result.error] : errors)(
                      schema.safeParse(x)
                    ),
                  []
                );
                if (schemas.length - errors.length !== 1) {
                  ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                  });
                }
              })
              .optional(),
          })
        )
      )
    )
    .optional(),
  loadingHtml: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  pages: z
    .array(
      z.record(z.any()).and(
        z.intersection(
          z.any(),
          z.object({
            navigationButtonsVisibility: z
              .enum(["inherit", "show", "hide"])
              .optional(),
            maxTimeToFinish: z.number().optional(),
            navigationTitle: z
              .any()
              .superRefine((x, ctx) => {
                const schemas = [z.string(), z.any()];
                const errors = schemas.reduce(
                  (errors: z.ZodError[], schema) =>
                    ((result) =>
                      "error" in result ? [...errors, result.error] : errors)(
                      schema.safeParse(x)
                    ),
                  []
                );
                if (schemas.length - errors.length !== 1) {
                  ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                  });
                }
              })
              .optional(),
            navigationDescription: z
              .any()
              .superRefine((x, ctx) => {
                const schemas = [z.string(), z.any()];
                const errors = schemas.reduce(
                  (errors: z.ZodError[], schema) =>
                    ((result) =>
                      "error" in result ? [...errors, result.error] : errors)(
                      schema.safeParse(x)
                    ),
                  []
                );
                if (schemas.length - errors.length !== 1) {
                  ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                  });
                }
              })
              .optional(),
          })
        )
      )
    )
    .optional(),
  elements: z
    .array(
      z.union([
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              columns: z.array(z.any()).optional(),
              columnLayout: z.enum(["horizontal", "vertical"]).optional(),
              transposeData: z.boolean().optional(),
              detailElements: z.string().optional(),
              detailPanelMode: z
                .enum(["none", "underRow", "underRowSingle"])
                .optional(),
              cellErrorLocation: z
                .enum(["default", "top", "bottom"])
                .optional(),
              detailErrorLocation: z
                .enum(["default", "top", "bottom"])
                .optional(),
              horizontalScroll: z.boolean().optional(),
              choices: z.array(z.any()).optional(),
              placeholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              keyDuplicationError: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              cellType: z
                .enum([
                  "dropdown",
                  "checkbox",
                  "radiogroup",
                  "tagbox",
                  "text",
                  "comment",
                  "boolean",
                  "expression",
                  "rating",
                ])
                .optional(),
              columnColCount: z
                .union([
                  z.literal(0),
                  z.literal(1),
                  z.literal(2),
                  z.literal(3),
                  z.literal(4),
                ])
                .optional(),
              allowAdaptiveActions: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              rows: z.array(z.any()).optional(),
              rowTitleWidth: z.string().optional(),
              totalText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              hideIfRowsEmpty: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              allowAddRows: z.boolean().optional(),
              allowRemoveRows: z.boolean().optional(),
              rowCount: z.number().optional(),
              minRowCount: z.number().optional(),
              maxRowCount: z.number().optional(),
              keyName: z.string().optional(),
              defaultRowValue: z.string().optional(),
              defaultValueFromLastRow: z.boolean().optional(),
              confirmDelete: z.boolean().optional(),
              confirmDeleteText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              addRowLocation: z
                .enum(["default", "top", "bottom", "topBottom"])
                .optional(),
              addRowText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              removeRowText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              hideColumnsIfEmpty: z.boolean().optional(),
              emptyRowsText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              detailPanelShowOnAdding: z.boolean().optional(),
              allowRowsDragAndDrop: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              rowTitleWidth: z.string().optional(),
              columns: z.array(z.any()).optional(),
              rows: z.array(z.any()).optional(),
              cells: z.string().optional(),
              rowsOrder: z.enum(["initial", "random"]).optional(),
              isAllRowRequired: z.boolean().optional(),
              eachRowUnique: z.boolean().optional(),
              hideIfRowsEmpty: z.boolean().optional(),
              cellComponent: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              expression: z.string().optional(),
              format: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              displayStyle: z
                .enum(["none", "decimal", "currency", "percent", "date"])
                .optional(),
              currency: z
                .enum([
                  "AED",
                  "AFN",
                  "ALL",
                  "AMD",
                  "ANG",
                  "AOA",
                  "ARS",
                  "AUD",
                  "AWG",
                  "AZN",
                  "BAM",
                  "BBD",
                  "BDT",
                  "BGN",
                  "BHD",
                  "BIF",
                  "BMD",
                  "BND",
                  "BOB",
                  "BOV",
                  "BRL",
                  "BSD",
                  "BTN",
                  "BWP",
                  "BYN",
                  "BZD",
                  "CAD",
                  "CDF",
                  "CHE",
                  "CHF",
                  "CHW",
                  "CLF",
                  "CLP",
                  "CNY",
                  "COP",
                  "COU",
                  "CRC",
                  "CUC",
                  "CUP",
                  "CVE",
                  "CZK",
                  "DJF",
                  "DKK",
                  "DOP",
                  "DZD",
                  "EGP",
                  "ERN",
                  "ETB",
                  "EUR",
                  "FJD",
                  "FKP",
                  "GBP",
                  "GEL",
                  "GHS",
                  "GIP",
                  "GMD",
                  "GNF",
                  "GTQ",
                  "GYD",
                  "HKD",
                  "HNL",
                  "HRK",
                  "HTG",
                  "HUF",
                  "IDR",
                  "ILS",
                  "INR",
                  "IQD",
                  "IRR",
                  "ISK",
                  "JMD",
                  "JOD",
                  "JPY",
                  "KES",
                  "KGS",
                  "KHR",
                  "KMF",
                  "KPW",
                  "KRW",
                  "KWD",
                  "KYD",
                  "KZT",
                  "LAK",
                  "LBP",
                  "LKR",
                  "LRD",
                  "LSL",
                  "LYD",
                  "MAD",
                  "MDL",
                  "MGA",
                  "MKD",
                  "MMK",
                  "MNT",
                  "MOP",
                  "MRO",
                  "MUR",
                  "MVR",
                  "MWK",
                  "MXN",
                  "MXV",
                  "MYR",
                  "MZN",
                  "NAD",
                  "NGN",
                  "NIO",
                  "NOK",
                  "NPR",
                  "NZD",
                  "OMR",
                  "PAB",
                  "PEN",
                  "PGK",
                  "PHP",
                  "PKR",
                  "PLN",
                  "PYG",
                  "QAR",
                  "RON",
                  "RSD",
                  "RUB",
                  "RWF",
                  "SAR",
                  "SBD",
                  "SCR",
                  "SDG",
                  "SEK",
                  "SGD",
                  "SHP",
                  "SLL",
                  "SOS",
                  "SRD",
                  "SSP",
                  "STD",
                  "SVC",
                  "SYP",
                  "SZL",
                  "THB",
                  "TJS",
                  "TMT",
                  "TND",
                  "TOP",
                  "TRY",
                  "TTD",
                  "TWD",
                  "TZS",
                  "UAH",
                  "UGX",
                  "USD",
                  "USN",
                  "UYI",
                  "UYU",
                  "UZS",
                  "VEF",
                  "VND",
                  "VUV",
                  "WST",
                  "XAF",
                  "XAG",
                  "XAU",
                  "XBA",
                  "XBB",
                  "XBC",
                  "XBD",
                  "XCD",
                  "XDR",
                  "XOF",
                  "XPD",
                  "XPF",
                  "XPT",
                  "XSU",
                  "XTS",
                  "XUA",
                  "XXX",
                  "YER",
                  "ZAR",
                  "ZMW",
                  "ZWL",
                ])
                .optional(),
              maximumFractionDigits: z.number().optional(),
              minimumFractionDigits: z.number().optional(),
              useGrouping: z.boolean().optional(),
              precision: z.number().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              showSelectAllItem: z.boolean().optional(),
              maxSelectedChoices: z.number().optional(),
              minSelectedChoices: z.number().optional(),
              selectAllText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              valuePropertyName: z.string().optional(),
              itemComponent: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              placeholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              allowClear: z.boolean().optional(),
              searchEnabled: z.boolean().optional(),
              textWrapEnabled: z.boolean().optional(),
              choicesLazyLoadEnabled: z.boolean().optional(),
              choicesLazyLoadPageSize: z.number().optional(),
              hideSelectedItems: z.boolean().optional(),
              closeOnSelect: z.boolean().optional(),
              searchMode: z.enum(["contains", "startsWith"]).optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              longTap: z.string().optional(),
              selectToRankEnabled: z.boolean().optional(),
              selectToRankAreasLayout: z
                .enum(["horizontal", "vertical"])
                .optional(),
              selectToRankEmptyRankedAreaText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              selectToRankEmptyUnrankedAreaText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              showClearButton: z.boolean().optional(),
              itemComponent: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              optionsCaption: z.string().optional(),
              contentMode: z.enum(["image", "video"]).optional(),
              imageFit: z.enum(["none", "contain", "cover", "fill"]).optional(),
              imageHeight: z.number().optional(),
              imageWidth: z.number().optional(),
              minImageWidth: z.string().optional(),
              minImageHeight: z.string().optional(),
              maxImageWidth: z.string().optional(),
              maxImageHeight: z.string().optional(),
              showLabel: z.boolean().optional(),
              multiSelect: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(z.intersection(z.any(), z.object({}))),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              placeholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              allowClear: z.boolean().optional(),
              choicesMin: z.number().optional(),
              choicesMax: z.number().optional(),
              choicesStep: z.number().optional(),
              autocomplete: z
                .enum([
                  "",
                  "name",
                  "honorific-prefix",
                  "given-name",
                  "additional-name",
                  "family-name",
                  "honorific-suffix",
                  "nickname",
                  "organization-title",
                  "username",
                  "new-password",
                  "current-password",
                  "organization",
                  "street-address",
                  "address-line1",
                  "address-line2",
                  "address-line3",
                  "address-level4",
                  "address-level3",
                  "address-level2",
                  "address-level1",
                  "country",
                  "country-name",
                  "postal-code",
                  "cc-name",
                  "cc-given-name",
                  "cc-additional-name",
                  "cc-family-name",
                  "cc-number",
                  "cc-exp",
                  "cc-exp-month",
                  "cc-exp-year",
                  "cc-csc",
                  "cc-type",
                  "transaction-currency",
                  "transaction-amount",
                  "language",
                  "bday",
                  "bday-day",
                  "bday-month",
                  "bday-year",
                  "sex",
                  "url",
                  "photo",
                  "tel",
                  "tel-country-code",
                  "tel-national",
                  "tel-area-code",
                  "tel-local",
                  "tel-local-prefix",
                  "tel-local-suffix",
                  "tel-extension",
                  "email",
                  "impp",
                ])
                .optional(),
              textWrapEnabled: z.boolean().optional(),
              searchEnabled: z.boolean().optional(),
              searchMode: z.enum(["contains", "startsWith"]).optional(),
              choicesLazyLoadEnabled: z.boolean().optional(),
              choicesLazyLoadPageSize: z.number().optional(),
              inputFieldComponent: z.string().optional(),
              itemComponent: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(z.intersection(z.any(), z.object({}))),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              inputType: z
                .enum([
                  "color",
                  "date",
                  "datetime-local",
                  "email",
                  "month",
                  "number",
                  "password",
                  "range",
                  "tel",
                  "text",
                  "time",
                  "url",
                  "week",
                ])
                .optional(),
              size: z.number().optional(),
              textUpdateMode: z
                .enum(["default", "onBlur", "onTyping"])
                .optional(),
              autocomplete: z
                .enum([
                  "",
                  "name",
                  "honorific-prefix",
                  "given-name",
                  "additional-name",
                  "family-name",
                  "honorific-suffix",
                  "nickname",
                  "organization-title",
                  "username",
                  "new-password",
                  "current-password",
                  "organization",
                  "street-address",
                  "address-line1",
                  "address-line2",
                  "address-line3",
                  "address-level4",
                  "address-level3",
                  "address-level2",
                  "address-level1",
                  "country",
                  "country-name",
                  "postal-code",
                  "cc-name",
                  "cc-given-name",
                  "cc-additional-name",
                  "cc-family-name",
                  "cc-number",
                  "cc-exp",
                  "cc-exp-month",
                  "cc-exp-year",
                  "cc-csc",
                  "cc-type",
                  "transaction-currency",
                  "transaction-amount",
                  "language",
                  "bday",
                  "bday-day",
                  "bday-month",
                  "bday-year",
                  "sex",
                  "url",
                  "photo",
                  "tel",
                  "tel-country-code",
                  "tel-national",
                  "tel-area-code",
                  "tel-local",
                  "tel-local-prefix",
                  "tel-local-suffix",
                  "tel-extension",
                  "email",
                  "impp",
                ])
                .optional(),
              min: z.string().optional(),
              max: z.string().optional(),
              minValueExpression: z.string().optional(),
              maxValueExpression: z.string().optional(),
              minErrorText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              maxErrorText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              maskType: z.string().optional(),
              maskSettings: z.array(z.any()).optional(),
              step: z.number().optional(),
              maxLength: z.number().optional(),
              placeholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              dataList: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              maxLength: z.number().optional(),
              cols: z.number().optional(),
              rows: z.number().optional(),
              placeholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              textUpdateMode: z
                .enum(["default", "onBlur", "onTyping"])
                .optional(),
              autoGrow: z.boolean().optional(),
              allowResize: z.boolean().optional(),
              acceptCarriageReturn: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              items: z.array(z.any()).optional(),
              itemSize: z.number().optional(),
              colCount: z
                .union([
                  z.literal(1),
                  z.literal(2),
                  z.literal(3),
                  z.literal(4),
                  z.literal(5),
                ])
                .optional(),
              itemErrorLocation: z
                .enum(["default", "top", "bottom"])
                .optional(),
              itemTitleWidth: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(z.intersection(z.any(), z.object({}))),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              html: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              imageLink: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              altText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              contentMode: z
                .enum(["auto", "image", "video", "youtube"])
                .optional(),
              imageFit: z.enum(["none", "contain", "cover", "fill"]).optional(),
              imageHeight: z.string().optional(),
              imageWidth: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(z.intersection(z.any(), z.object({}))),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              showPreview: z.boolean().optional(),
              allowMultiple: z.boolean().optional(),
              allowImagesPreview: z.boolean().optional(),
              imageHeight: z.string().optional(),
              imageWidth: z.string().optional(),
              acceptedTypes: z.string().optional(),
              storeDataAsText: z.boolean().optional(),
              waitForUpload: z.boolean().optional(),
              maxSize: z.number().optional(),
              needConfirmRemoveFile: z.boolean().optional(),
              sourceType: z.enum(["file", "camera", "file-camera"]).optional(),
              fileOrPhotoPlaceholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              photoPlaceholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              filePlaceholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              allowCameraAccess: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              rateType: z.enum(["labels", "stars", "smileys"]).optional(),
              scaleColorMode: z.enum(["monochrome", "colored"]).optional(),
              rateColorMode: z.enum(["default", "scale"]).optional(),
              autoGenerate: z
                .union([z.literal(true), z.literal(false)])
                .optional(),
              rateCount: z.number().optional(),
              rateValues: z.array(z.any()).optional(),
              rateMin: z.number().optional(),
              rateMax: z.number().optional(),
              rateStep: z.number().optional(),
              minRateDescription: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              maxRateDescription: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              displayRateDescriptionsAsExtremeItems: z.boolean().optional(),
              rateDescriptionLocation: z
                .enum(["leftRight", "top", "bottom", "topBottom"])
                .optional(),
              displayMode: z.enum(["auto", "buttons", "dropdown"]).optional(),
              itemComponent: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              label: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              labelTrue: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              labelFalse: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              valueTrue: z.string().optional(),
              valueFalse: z.string().optional(),
              swapOrder: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              signatureWidth: z.number().optional(),
              signatureHeight: z.number().optional(),
              signatureAutoScaleEnabled: z.boolean().optional(),
              penMinWidth: z.number().optional(),
              penMaxWidth: z.number().optional(),
              height: z.number().optional(),
              allowClear: z.boolean().optional(),
              showPlaceholder: z.boolean().optional(),
              placeholder: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              backgroundImage: z.string().optional(),
              penColor: z.string().optional(),
              backgroundColor: z.string().optional(),
              dataFormat: z
                .enum(["png", "image/jpeg", "image/svg+xml"])
                .optional(),
              storeDataAsText: z.boolean().optional(),
              waitForUpload: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              templateElements: z
                .array(
                  z.union([
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                    z.any(),
                  ])
                )
                .optional(),
              templateTitle: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              templateTabTitle: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              templateDescription: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              noEntriesText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              allowAddPanel: z.boolean().optional(),
              allowRemovePanel: z.boolean().optional(),
              newPanelPosition: z.enum(["next", "last"]).optional(),
              panelCount: z
                .union([
                  z.literal(0),
                  z.literal(1),
                  z.literal(2),
                  z.literal(3),
                  z.literal(4),
                  z.literal(5),
                  z.literal(6),
                  z.literal(7),
                  z.literal(8),
                  z.literal(9),
                  z.literal(10),
                ])
                .optional(),
              minPanelCount: z.number().optional(),
              maxPanelCount: z.number().optional(),
              defaultPanelValue: z.string().optional(),
              defaultValueFromLastPanel: z.boolean().optional(),
              panelsState: z
                .enum(["default", "collapsed", "expanded", "firstExpanded"])
                .optional(),
              keyName: z.string().optional(),
              keyDuplicationError: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              confirmDelete: z.boolean().optional(),
              confirmDeleteText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              panelAddText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              panelRemoveText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              panelPrevText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              panelNextText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              showQuestionNumbers: z
                .enum(["off", "onPanel", "onSurvey"])
                .optional(),
              showRangeInProgress: z.boolean().optional(),
              renderMode: z
                .enum([
                  "list",
                  "progressTop",
                  "progressBottom",
                  "progressTopBottom",
                  "tab",
                ])
                .optional(),
              tabAlign: z.enum(["left", "center", "right"]).optional(),
              templateTitleLocation: z
                .enum(["default", "top", "bottom", "left"])
                .optional(),
              templateErrorLocation: z
                .enum(["default", "top", "bottom"])
                .optional(),
              templateVisibleIf: z.string().optional(),
              panelRemoveButtonLocation: z.enum(["bottom", "right"]).optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              type: z.string().optional(),
              state: z.enum(["default", "collapsed", "expanded"]).optional(),
              isRequired: z.boolean().optional(),
              requiredErrorText: z
                .any()
                .superRefine((x, ctx) => {
                  const schemas = [z.string(), z.any()];
                  const errors = schemas.reduce(
                    (errors: z.ZodError[], schema) =>
                      ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x)
                      ),
                    []
                  );
                  if (schemas.length - errors.length !== 1) {
                    ctx.addIssue({
                      path: ctx.path,
                      code: "invalid_union",
                      unionErrors: errors,
                      message: "Invalid input: Should pass single schema",
                    });
                  }
                })
                .optional(),
              startWithNewLine: z.boolean().optional(),
              width: z.string().optional(),
              minWidth: z.string().optional(),
              maxWidth: z.string().optional(),
              innerIndent: z
                .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
                .optional(),
              indent: z
                .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
                .optional(),
              page: z.string().optional(),
              showNumber: z.boolean().optional(),
              showQuestionNumbers: z
                .enum(["default", "onpanel", "off"])
                .optional(),
              questionStartIndex: z.string().optional(),
              allowAdaptiveActions: z.boolean().optional(),
            })
          )
        ),
      ])
    )
    .optional(),
  triggers: z
    .array(
      z.union([
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              pages: z.string().optional(),
              questions: z.string().optional(),
            })
          )
        ),
        z.record(z.any()).and(z.intersection(z.any(), z.object({}))),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              setToName: z.string().optional(),
              setValue: z.string().optional(),
              isVariable: z.boolean().optional(),
            })
          )
        ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              fromName: z.string().optional(),
              setToName: z.string().optional(),
              copyDisplayValue: z.boolean().optional(),
            })
          )
        ),
        z
          .record(z.any())
          .and(
            z.intersection(
              z.any(),
              z.object({ gotoName: z.string().optional() })
            )
          ),
        z.record(z.any()).and(
          z.intersection(
            z.any(),
            z.object({
              setToName: z.string().optional(),
              runExpression: z.string().optional(),
            })
          )
        ),
      ])
    )
    .optional(),
  calculatedValues: z
    .array(
      z.object({
        name: z.string(),
        expression: z.string().optional(),
        includeIntoResult: z.boolean().optional(),
      })
    )
    .optional(),
  surveyId: z.string().optional(),
  surveyPostId: z.string().optional(),
  surveyShowDataSaving: z.boolean().optional(),
  cookieName: z.string().optional(),
  sendResultOnPageNext: z.boolean().optional(),
  showNavigationButtons: z.enum(["none", "top", "bottom", "both"]).optional(),
  showPrevButton: z.boolean().optional(),
  showTitle: z.boolean().optional(),
  showPageTitles: z.boolean().optional(),
  showCompletedPage: z.boolean().optional(),
  navigateToUrl: z.string().optional(),
  navigateToUrlOnCondition: z
    .array(
      z.record(z.any()).and(
        z.intersection(
          z.any(),
          z.object({
            url: z
              .any()
              .superRefine((x, ctx) => {
                const schemas = [z.string(), z.any()];
                const errors = schemas.reduce(
                  (errors: z.ZodError[], schema) =>
                    ((result) =>
                      "error" in result ? [...errors, result.error] : errors)(
                      schema.safeParse(x)
                    ),
                  []
                );
                if (schemas.length - errors.length !== 1) {
                  ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                  });
                }
              })
              .optional(),
          })
        )
      )
    )
    .optional(),
  questionsOrder: z.enum(["initial", "random"]).optional(),
  matrixDragHandleArea: z.enum(["entireItem", "icon"]).optional(),
  showPageNumbers: z.boolean().optional(),
  showQuestionNumbers: z.enum(["on", "onPage", "off"]).optional(),
  questionTitleLocation: z.enum(["top", "bottom", "left"]).optional(),
  questionDescriptionLocation: z.enum(["underInput", "underTitle"]).optional(),
  questionErrorLocation: z.enum(["top", "bottom"]).optional(),
  showProgressBar: z
    .enum(["off", "auto", "aboveHeader", "belowHeader", "bottom", "topBottom"])
    .optional(),
  progressBarType: z
    .enum(["pages", "questions", "requiredQuestions", "correctQuestions"])
    .optional(),
  progressBarShowPageTitles: z.boolean().optional(),
  progressBarShowPageNumbers: z.boolean().optional(),
  progressBarInheritWidthFrom: z.enum(["container", "survey"]).optional(),
  showTOC: z.boolean().optional(),
  tocLocation: z.enum(["left", "right"]).optional(),
  mode: z.enum(["edit", "display"]).optional(),
  storeOthersAsComment: z.boolean().optional(),
  maxTextLength: z.number().optional(),
  maxOthersLength: z.number().optional(),
  goNextPageAutomatic: z.boolean().optional(),
  allowCompleteSurveyAutomatic: z.boolean().optional(),
  clearInvisibleValues: z
    .enum(["none", "onComplete", "onHidden", "onHiddenContainer"])
    .optional(),
  checkErrorsMode: z
    .enum(["onNextPage", "onValueChanged", "onComplete"])
    .optional(),
  textUpdateMode: z.enum(["onBlur", "onTyping"]).optional(),
  autoGrowComment: z.boolean().optional(),
  allowResizeComment: z.boolean().optional(),
  startSurveyText: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  pagePrevText: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  pageNextText: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  completeText: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  previewText: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  editText: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  requiredText: z.string().optional(),
  questionStartIndex: z.string().optional(),
  questionTitlePattern: z.string().optional(),
  questionTitleTemplate: z
    .any()
    .superRefine((x, ctx) => {
      const schemas = [
        z.string(),
        z.object({ default: z.string().optional(), en: z.string().optional() }),
      ];
      const errors = schemas.reduce(
        (errors: z.ZodError[], schema) =>
          ((result) =>
            "error" in result ? [...errors, result.error] : errors)(
            schema.safeParse(x)
          ),
        []
      );
      if (schemas.length - errors.length !== 1) {
        ctx.addIssue({
          path: ctx.path,
          code: "invalid_union",
          unionErrors: errors,
          message: "Invalid input: Should pass single schema",
        });
      }
    })
    .optional(),
  firstPageIsStarted: z.boolean().optional(),
  isSinglePage: z.boolean().optional(),
  questionsOnPageMode: z
    .enum(["standard", "singlePage", "questionPerPage"])
    .optional(),
  showPreviewBeforeComplete: z
    .enum(["noPreview", "showAllQuestions", "showAnsweredQuestions"])
    .optional(),
  maxTimeToFinish: z.number().optional(),
  maxTimeToFinishPage: z.number().optional(),
  showTimerPanel: z.enum(["none", "top", "bottom"]).optional(),
  showTimerPanelMode: z.enum(["page", "survey", "all"]).optional(),
  widthMode: z.enum(["auto", "static", "responsive"]).optional(),
  width: z.string().optional(),
  fitToContainer: z.boolean().optional(),
  headerView: z.enum(["basic", "advanced"]).optional(),
  backgroundImage: z.string().optional(),
  backgroundImageFit: z.enum(["auto", "contain", "cover"]).optional(),
  backgroundImageAttachment: z.enum(["scroll", "fixed"]).optional(),
  backgroundOpacity: z.number().optional(),
  showBrandInfo: z.boolean().optional(),
});
