using FirstWebApi.Models;
using FluentValidation;

namespace FirstWebApi.Validations;

public class CategoryCreateInputValidator : AbstractValidator<CategoryCreateInput>
{
    public CategoryCreateInputValidator()
    {
        RuleFor(r => r.Name).NotEmpty().WithMessage("Kategori adı boş bırakılamaz");
        RuleFor(r => r.Name).MaximumLength(150).WithMessage("Kategori adı 150 karakterden fazla olamaz");
        RuleFor(r => r.Name).MinimumLength(3).WithMessage("Kategori adı 3 karakterden az olamaz");
    }
}